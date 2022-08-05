import MeLiHomePagePO from '../../pageObjects/mercadoLibrePageObj/MeLiHomePagePO'

const meLiHomePagePO = new MeLiHomePagePO

describe('MercadoLibre navegacion de categorias',()=>{

    beforeEach(() => {
        meLiHomePagePO.navigateHome()
    });
    
    it('Navegar a categoria Climatizacion y validar titulo de categoria y total de resultados', () => {
        
    });

    it('Navegar a categoria celulares y smarthphones y validar titulo de categoria y total de resultados', () => {
        
    });

    it('Navegar a categoria perfumes importados y validar titulo de categoria y total de resultados', () => {
        
    });

    it('Navegar a categoria industria textil y validar titulo de categoria y total de resultados', () => {
        
    });

    it('Navegar a categoria cuarto del bebe y validar titulo de categoria y total de resultados', () => {
        
    });
    
})