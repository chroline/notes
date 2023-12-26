# Associative Memory

- imagine you hear a song in a busy coffee shop (noisy input source), and after a while your memory *converges* onto a specific piece of information (the whole memory)
   - this is an example of auto-associative memory
- remembering a face from a name is heteroassociative memory

# Towards an algorithm for recall

- dx/dt = -x
   - this is a differential equation, or a dynamical system
   - proposed by Newton and Leibniz to describe laws of nature
- we want to describe functions that abide by this equation
   - such functions describe phenomena in nature abiding by the law that the differential equation expresses
- we want to do this with more than intuition
- we want to actually calculate the functions

# Recall algorithm

- dx is (x_later − x_earlier) and dt is a number we choose (usually very small)
- (x_later − x_earlier)/dt = -x_earlier
   - choosing x_earlier on the right is Euler's explicit method; x_later on the right is Euler's implicit method (more frequently used in video games)
- x_later = -x_earlier*dt + x_earlier
- x_later iteratively adjusts based on x_earlier

