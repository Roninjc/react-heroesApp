import React from 'react';
import { mount } from "enzyme";
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom'


describe('Pruebas en <PrivateRoute />', () => {
    
    const props = {
        location: {
            pathname: '/marvel'
        }
    } 

    test('should mostrar el componente si está autenticado y guardar el localStorage', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={ true }
                    component={ () => {<span>Listo</span>} }
                    { ...props }
                />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists() ).toBe(true);

    });
    
})
