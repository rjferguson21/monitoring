# Monitoring Documentation
 
# Table of Contents
- [Deployment](#deploy-monitoring)
- [Prerequisites](#pre-requisites)


# Prerequisites
* Kubernetes Cluster deployed
* Kubernetes config installed in `~/.kube/config`
* Helm installed

Install Helm
https://helm.sh/docs/intro/install/

## Deployment
```
git clone https://repo1.dsop.io/platform-one/big-bang/apps/core/monitorin g.git
cd monitoring
helm dependency update chart
helm install monitoring chart --debug
```