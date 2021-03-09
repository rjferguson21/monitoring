describe('Basic prometheus', function() {
    it('Visits the prometheus sign in page', function() {
      cy.visit(Cypress.env('prometheus_url'))
  
      cy.get('#expr0')
        .type('kube_node_info')
  
      // Run a query
      cy.get('input[name="submit"]')
        .click({waitForAnimations: false})
    })

    it('Validate prometheus targets', function() {
      // Make sure we have expected targets.  Come targets may have variable number of instances thus we
      // have to allow for a variable number of running instances.
      cy.wait(200)
      cy.visit(`${Cypress.env('prometheus_url')}/targets`)
      cy.contains(/monitoring\/alertmanager\/0 +\(\d+\/\d+ +up\)/)
      cy.contains(/monitoring\/coredns\/0 +\(\d+\/\d+ +up\)/)
      cy.contains(/monitoring\/grafana\/0 +\(\d+\/\d+ +up\)/)
      cy.contains(/monitoring\/kube-apiserver\/0 +\(\d+\/\d+ +up\)/)
      cy.contains(/monitoring\/istio-envoy\/0 +\(\d+\/\d+ +up\)/)
      cy.contains(/monitoring\/istio-pilot\/0 +\(\d+\/\d+ +up\)/)
      cy.contains(/monitoring\/kube-state-metrics\/0 +\(\d+\/\d+ +up\)/)
      cy.contains(/monitoring\/kubelet\/0 +\(\d+\/\d+ +up\)/)
      cy.contains(/monitoring\/kubelet\/1 +\(\d+\/\d+ +up\)/)
      cy.contains(/monitoring\/kubelet\/2 +\(\d+\/\d+ +up\)/)
      cy.contains(/monitoring\/node-exporter\/0 +\(\d+\/\d+ +up\)/)
      cy.contains(/monitoring\/prometheus-operator\/0 +\(\d+\/\d+ +up\)/)
      cy.contains(/monitoring\/prometheus\/0 +\(\d+\/\d+ +up\)/)
    })
})
