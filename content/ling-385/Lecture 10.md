# 2 Basic kinds of Neural Networks

## Associative NN

- given a noisy variable environmental stimulus/sensation, they recall a prototypical version of it
   - e.g., a face with a beard and hat, can induce a memory of that prototypical face
- composed of many neurons, each connected to all others by weight
   - in discrete (1,-1) NN's, neurons are not connected to themselves
   - in continuous NN's, neurons can connect to themselves
- all neurons receive information from the environment as activations, and calculate new activations based on the weights
- knowledge represented as weight matrix
- recognition is performed as sig(Weight Matrix * Sensation Vector)
- learning is performed by averaging weight matrices for all memories

## Feedforward NN

- given a noisy variable environmental stimulus/sensation, they can give it a label
   - e.g., a face can be given a name
- composed of multiple neurons in multiple layers layers, with each neuron in
one layer connected to all neurons in the next layer
   - first layer receives an information vector from the environment
   - second layer neurons process that information, generating activations on each neuron
   - middle processing layers process info from previous layers until output label is reached
- knowledge represented by weights matrices for each processing layer
- recognition is performed as sig((Weight Matrix * Input Vector) + Bias) at each processing layer

