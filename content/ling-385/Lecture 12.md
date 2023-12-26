# Error-based Learning

- ::neural networks utilize knowledge represented by weights (w) and biases (b) to map from input neurons to output neurons::
- this mapping involves a psychological process known as recognition
- mathematically, recognition includes:
   1. input processing: IP(w’s, input activations)
   2. adding bias
   3. performing the activation function (e.g., sigmoid) at each neuron.
- ::learning process for weights (w) and biases (b) involves trial and error or "error-based learning"::
- learning process can be summarized as follows:
   1. randomly initialize weights (w) and biases (b) for the entire neural network
   2. repeat the following steps:
      - randomly select an Input-Desired Output pair for learning
      - process the input through the entire network to obtain a computed output
      - compute the Loss as the difference between the computed output and the desired output
      - use the Loss as an opportunity for learning, with the specific formula for improvement to be discussed
   3. ::intuitively, if increasing the weight leads to an increase in Loss, the weight should be decreased, and vice versa::

# Stochastic Gradient Descent (SGD)

- central quantity: Change in Loss when adjusting each weight or bias
   - dLoss/dweight or dL/dw
- dL/dw represents how much the loss changes when the weight changes
   - example: If dL/dw = 4, increasing the weight by a bit (e.g., from 1 to 2) increases the loss by 4. To decrease the loss, decrease the weight.
- t is used to denote time
- SGD formula is w(t) = w(t − 1) − η * dL/dw
   - ::adjust the weight at time t based on the previous weight (w(t-1)), learning rate, and the change in loss with respect to the weight (dL/dw)::
   - if w(t-1) = 10 and dL/dw = 4, using η = 0.1, w(t) = 10 - (0.1 * 4) = 9.6
- if dL/dw is positive, the minus reduces the weight, and if it's negative, it increases the weight
   - hence the minus (-) in the SGD formula

# Basic derivatives

- Imagine we have a function z = 3x
- if x = 1, z = 3; if x = 2, z = 6; if x = 3, z = 9...
- ::derivative thinking: what is the change in z if x changes?::
   - what is dz/dx, when z = 3x
   - x = 1, 2, 3, 4, 5, 6, 7, 8... → z = 3, 6, 9, 12, 15, 19, 21, 24...
   - So what is the answer? 3!
- if we replace 3 by the constant w, we have z = wx, where x is a constant
- so, what is dz/dx, when z = wx?
   - if z = wx, then dz/dx = w
- later we will see that sometimes when we think of z = wx, x is a fixed constant, while w varies.
- if z = wx, x constant and w varying, what is dz/dw? x!

# More complex derivatives

- function: z = x^2
- values of x: 1, 2, 3, 4, 5, 6, 7, 8...
   - corresponding values of z: 1, 4, 9, 16, 25, 36, 49, 64...
- wWhat is the change in z if x increases? what is dz/dx if z = x^2?
- consider the change in z:
   - x values: 1, 2, 3, 4, 5, 6, 7, 8...
   - z values: 1, 4, 9, 16, 25, 36, 49, 64...
   - change in z: 3, 5, 7, 9, 11, 13, 15...
- change in x is a linear function
- Newton and Leibniz (1684) discovered for z = x^2, dz/dx = 2x (linear function)
- if z = (1/2)x^2, dz/dx = x

# Chain rule for derivatives

- 2 quantities: a and b, if a changes then b changes accordingly
- db/da measures the effect of a on b
   - if a influences b and b influences c: a → b → c
- Leibniz's question: what is the influence of a on c?
   - profound question in science with interrelated variables
- Leibniz's formula: If a → b → c, dc/da = (db/da) * (dc/db)

