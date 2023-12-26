# Knowledge and Recognition

- in a feedforward NN, each neuron has knowledge as a sequence of weights, and a bias
- recognition is done gradually by processing neurons, taking the input and transforming it to the output
- each neuron does a very simple calculation:
   1. inner product inputs with weights
   2. add bias
   3. perform activation function (e.g. sigmoid)
- where do the weights and biases come from?

# Error-Based Learning

- ==deep learning neural networks learn through making mistakes==
- initial weights and biases are randomly assigned before the learning process begins
- NN processes input data using these random weights and biases
- output is compared to the desired output to determine the error or loss.
   - if the output matches the desired result, no changes are made to the weights and biases
   - if there is a mismatch, indicating a mistake, NN adjusts the weights and biases to minimize the loss
- loss is calculated as the the computed output subtracted from the desired output
- ::goal is to learn from mistakes and update weights and biases to reduce future errors::

# Error-Based Learning Process

- randomly select an input-output pair, and process it through the NN
   - desired output is the original label
   - computer output is the result of the NN
- measure the loss of the output
   - if it's near 0, keep the parameters (w's and b) as they are
   - otherwise, improve the parameters
- repeat this process until computed and desired outputs consistently match
- loss is related to the difference between computed and desired outputs
   - process of adjusting parameters to minimize loss takes time to learn
- learning good parameters (w's and b's) may require thousands of iterations or epochs
- focus on adjusting parameters to minimize loss, applying the psychology of learning from mistakes
- consider whether increasing or decreasing a parameter (e.g., w or b) improves or worsens the loss
   - if increasing the parameter increases the loss, decrease it
   - if increasing the parameter decreases the loss, increase it

# Stochastic Gradient Descent

- Old learning law: New Estimate = Current Estimate - Loss
   - Problem: Learns in one fell swoop, unlike human learning which occurs gradually through small error corrections.
- Solution: Introduce a small number (e.g., 0.1 or 10 percent)
- New Learning Law: New Estimate = Current Estimate - 0.1*Loss

