import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';
import App from '../../App';

const comentarios = 
    ['Que carrinho daora 😀', 'Genial!🦇'];

    


describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
       
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar 2 comentários', ()=> {
        render(<App/>)
        comentarios.forEach(comentario => {
            fireEvent.change(screen.getByTestId('campo-comentario'), {
                target: {
                    value:comentario
                }
            })
            fireEvent.click(screen.getByTestId('btn-comentario'))

            expect(screen.getByText(comentario)).toBeInTheDocument();
        })
        
    })
});