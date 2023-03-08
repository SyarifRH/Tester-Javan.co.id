describe('Responsive Website', () => {
  beforeEach(() => {
    cy.visit('https://javan.co.id/')
  })

  it('Size 768 x 1024', () => {
    cy.viewport(768, 1024)
    cy.wait(2000)
    cy.get('h1').should('contain', 'Optimize your Business with Javan')
  })

  it('Size 820 x 1180', () => {
    cy.viewport(820, 1180)
    cy.wait(2000)
    cy.get('h1').should('contain', 'Optimize your Business with Javan')
  })

  it('Size 834  x 1194', () => {
    cy.viewport(834, 1194)
    cy.wait(2000)
    cy.get('h1').should('contain', 'Optimize your Business with Javan')
  })

  it('Size 800  x 1280', () => {
    cy.viewport(800, 1280)
    cy.wait(2000)
    cy.get('h1').should('contain', 'Optimize your Business with Javan')
  })

  it('Size 1114  x 705 ', () => {
    cy.viewport(1114, 705)
    cy.wait(2000)
    cy.get('h1').should('contain', 'Optimize your Business with Javan')
  })

  it('Special size (Apple Watch Serie 6) 162 x 197  ', () => {
    cy.viewport(162, 197)
    cy.wait(2000)
    cy.get('h1').should('contain', 'Optimize your Business with Javan')
  })

  it('Size Galaxy Fold2 (884   x 1104) ', () => {
    cy.viewport(884, 1104)
    cy.wait(2000)
    cy.get('h1').should('contain', 'Optimize your Business with Javan')
  })
})

describe('Perfomance Bad, Loading Image Late (Flaky Test)',() => {
  beforeEach(() => {
    cy.visit('https://javan.co.id/ourquality/process-deliverable')
  })

  it('Access ourquality/process-deliverable', () => {
   
    cy.wait(5000) // tunggu 5 detik untuk memastikan halaman selesai dimuat
    cy.get('img', { timeout: 10000 }).should('be.visible') // tunggu hingga 10 detik untuk memastikan gambar selesai dimuat

  })
})

describe('Perfomance Bad, Loading Image Late (Flaky Test)',() => {
  beforeEach(() => {
    cy.visit('https://javan.co.id/ourquality/resources')
  })

  it('Access ourquality/resources', () => {
   
    cy.wait(5000) // tunggu 5 detik untuk memastikan halaman selesai dimuat
    cy.get('img', { timeout: 10000 }).should('be.visible') // tunggu hingga 10 detik untuk memastikan gambar selesai dimuat

  })
})

describe('Perfomance Bad, Loading Image Late (Flaky Test)',() => {
  beforeEach(() => {
    cy.visit('https://javan.co.id/portfolio')
  })

  it('Access portofolio', () => {
   
    cy.wait(5000) // tunggu 5 detik untuk memastikan halaman selesai dimuat
    cy.get('img', { timeout: 10000 }).should('be.visible') // tunggu hingga 10 detik untuk memastikan gambar selesai dimuat

  })
})

describe('No HP/Whatsapp not integer but string',() => {
  beforeEach(() => {
    cy.visit('https://javan.co.id/contact')
  })

  it('Access portofolio', () => {
    const x = 123;
    expect(x).to.be.a('number');
   
    cy.get('#in_phone').type("anonymous");
  })
})
