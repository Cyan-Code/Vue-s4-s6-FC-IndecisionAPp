import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter";

describe("Counter Component", () => {
    let wrapper;
    beforeEach( ()=> {
        wrapper = shallowMount(Counter);
    });

    test("should de hacer match", () => {
        expect( wrapper.html ).toMatchSnapshot();
    });
    test('debe de tener el valor counter por defecto', () => { 
        expect(wrapper.find('h10').exists()).toBeFalsy();
        expect(wrapper.find('h1').text()).toBe('CustomTitle');
    });
    test('<P> debe de tener el valor por defecto de 10', () => { 
        const pTag = wrapper.findAll('p')[1];
        expect(pTag.text()).toBe('10');
    });
    test('should de incrementar y decrementar el contador', async() => { 
        const buttons = wrapper.findAll('button');
        await buttons[0].trigger('click');

        const value = wrapper.findAll('p')[1].text();
        expect(value).toBe("11");
    })
});
