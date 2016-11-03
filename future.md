//dockerfile-guru
//have a master dockerfile that's shared through a simple templating system (es6 string interopelation)
//when you run dockerfile-guru in the proeject will go through the template file (Dockerfile.template.json). this file will be in charge of importing the master Dockerfile (or multiple files) and add appropriate configurations
//future improvements: make dockerfile-guru reveal all the ports that are being used in a nested structure (use globs)

// Usage
// dockerfile-guru: gen cerates a Dockerfile given a parent, child and port
// dockerfile-guru ports: searches through current directory structure and reveal all the ports that are exposed (useful when you want to know which ports are exposed)


