import React from 'react';
import {Container, Form, Input, Submit} from './styles';

export default function Main() {
    return (
        <Container>
            <Form>
                <Input
                    autoCorrect={false}
                    autoCaptalize="none"
                    placeHolder="Adicionar usuário"
                />
                <Submit />
            </Form>
        </Container>
    );
}
