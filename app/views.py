from app import app
from flask import Flask, render_template, json,jsonify, request
import pandas as pd
import random
from sympy  import Symbol, Derivative, solve,sin, sympify
import math
from sympy.core.sympify import SympifyError
import sympy.printing as printing

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/sample_jax')
def sample_jax():
    return render_template('sample_mathjax.html')



@app.route('/get_foc',methods=['POST'])
def get_foc():
	jData = request.get_json()
	retData = {}
	c_points = []
	x = Symbol('x')
	Xt = jData['init_func']
	retData['init_func'] = Xt
	derivative_data = []
	try:
		d1 = Derivative(Xt,x).doit()
		retData['d1'] = printing.latex(d1)
		d2 = Derivative(Xt,x,2).doit()
		retData['d2'] = printing.latex(d2)
		# critical_points = solve(d1)
		# print(critical_points)
		# for idx,c in enumerate(critical_points):
		# 	retData['critical_points_'+str(idx)] = str(round(d2.subs({x:c}).evalf(),3))
		# print('found max mins')
		for c in range(-100,100,1):
			new_row = []
			new_row.append ((c/20))
			new_row.append((round((sympify(Xt)).subs({x:c/20}).evalf(),4)))
			new_row.append((round(d1.subs({x:c/20}).evalf(),4)))
			new_row.append((round(d2.subs({x:c/20}).evalf(),4)))
			if c/20 == 3 or c/20 == -3:
				new_row.append((round((sympify(Xt)).subs({x:c/20}).evalf(),4)))

			else:
				new_row.append(None)
			derivative_data.append(new_row)
		print('created data')
		retData['forViz'] = str(derivative_data)
	except SympifyError:
		print('Parsing error')
		error_msg = {'error':"Incorrect function. Please rectify."}
		return jsonify(success=False, data=error_msg)
	except:
		print('Doesn\' t exist')
		error_msg = {'error':'Doesn\' t exist'}
		return jsonify(success=False, data=error_msg)
	
	return jsonify(success=True, data=retData)


@app.route('/get_soc',methods=['GET'])
def get_soc():
	x = Symbol('x')
	Xt = fun
	d2 = Derivative(Xt,x,2).doit()

	return printing.latex(d2)

def grad_ascent(x0, f1x, x):
	g = 9.8
	u = 25
	theta = Symbol('theta')
	R = u**2*sin(2*theta) / g

	history = []
	epsilon = 1e-6
	step_size = 1e-4
	x_old = x0
	x_new = x_old + step_size*f1x.subs({x:x_old}).evalf()
	while abs(x_old - x_new) > epsilon:
		x_old = x_new
		x_new = x_old + step_size*f1x.subs({x:x_old}).evalf()

		x_new_degree = x_new*180 / math.pi
		history.append([x_new_degree,R.subs({theta:x_new,u:u,g:g})])
	return x_new,history





def find_max_theta(R, theta):
    # Calculate the first derivative
    R1theta = Derivative(R, theta).doit()
    theta0 = 1e-3
    theta_max,history = grad_ascent(theta0, R1theta, theta)
    return theta_max,history


def validate_input_function():
	try:
		f = sympify(f)
	except SympifyError:
		return False

def interpolate_projectile(R,theta,u,g):
	interpolating_points = []
	for i in range(90):
		new_row = []
		projectile_angle = i*math.pi/180
		new_row.append(i)
		new_row.append(R.subs({theta:projectile_angle,u:u,g:g}))
		interpolating_points.append(new_row)
	return interpolating_points
       
@app.route('/get_projectile',methods=['POST'])
def get_projectile():
	g = 9.8
	u = 25
	theta = Symbol('theta')
	R = u**2*sin(2*theta) / g

	theta_max,history = find_max_theta(R,theta)
	max_range = R.subs({theta:theta_max})
	interpolating_points = interpolate_projectile(R,theta,u,g)
	theta_max =  theta_max*180 / math.pi

	return jsonify({'theta_max':str(round(theta_max,2)),'max_range':str(round(max_range,2)),'projectile_points':str(interpolating_points),'history':str(history)})