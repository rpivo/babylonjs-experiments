## Experiment 40: Euler Angles

#### New to Me
- There are several methods of achieving rotation in Babylon.js.
- Each method uses a particular convention.
- In 3D space, Euler angles can produce any possible orientation by providing three angles to rotate about each of three axes in a given order.
- For three axes X, Y, and Z, there are 12 different permutations for the order of the angles.
- Since X, Y, and Z can be treated as either *World* or *local* axes, this means there is a potential of 24 different possibilities.
- Most, if not all, of these permutations are in use in different systems around the world.
- You need to be very careful that you know very clearly the convention that the system you are working in uses.
- `Mesh.rotation(alpha, beta, gamma)` uses the three Euler angles alpha, beta, and gamma, which are rotations about the X, Y, and Z axes respectively.
- The convention that Babylon.js uses is based on the yaw, pitch, and roll convention, and so is carried out around X, Y, and Z as local axes in the order Y, X, Z.
- References to Euler angles within the Babylon.js community can usually be taken to mean the angles to use within the `rotation` method.
- A pitch is about X, yaw is about Y, and roll is about Z applied in the order yaw, pitch, and roll, using local axes.