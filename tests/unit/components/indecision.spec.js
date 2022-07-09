import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision'

describe('Indecision Component', () => { 
    let wrapper;
    beforeEach( () => {
        wrapper = shallowMount(Indecision);
        clgSpy = spyOn(console, 'log');
    });
    test('should hacer match con el snapshot', () => { 
        expect(wrapper.html()).toMatchSnapshot();
    });
    test('No debe de disparar nada al escribir en el input', async() => { 
        const input = wrapper.find('input');
        const getAnswer = jest.spyOn(wrapper.vm, 'getAnser');
        await input.setValue('Hola Mundo');
        expect(clgSpy).toHaveBeenCalledTimes(1);
        expect( getAnswer ).not.toHaveBeenCalled();
    });
    test('"?" se debe disparar el fetch', () => { 
        
    });
    test('Pruebas en el getAnswer', () => {

    });
    test('Pruebas en el getAnswer - Fallo', () => {

    });

 })
