import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";


describe('Pruebas en authReucer', () => {
    
    test('should retornar el estado por defecto', () => {
        
        const state = authReducer({ logged: false }, {});
        expect( state ).toEqual({ logged: false });
        
    });

    test('should de autenticar y colocar el name del usuario', () => {
        
        const action = {
            type: types.login,
            payload: {
                name: 'Hernando'
            }
        }

        const state = authReducer({ logged: false }, action);
        expect( state ).toEqual({
            logged: true,
            name: 'Hernando'
        });

    });

    test('should borrar el name del usuario y logged en false', () => {
        
    })
    
    
})
