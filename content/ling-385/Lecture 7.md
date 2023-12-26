# Model 3 of Memory: The Hopfield Model of Memory

- there will be many neurons
- each neuron is connected with weights to all other neurons, and takes input from all other neurons
- neurons can now also be connected to themselves
- each neuron will have an activation *a*
- each neuron’s activation can change in time, so we can focus on da/dt
   - we need to focus on the change in activations of each neuron
   - ::the change in each activation is the sum of the inputs from other neurons multiplied by the weights from these other neurons::

![Image.png](Lecture%207.assets/Image.png)

- ::sigmoid will be applied to these activations to keep them within the range of 0–1::

