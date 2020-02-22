import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Form, Input, Submit} from './styles';

export default function Main() {
    return (
        <Container>
            <Form>
                <Input
                    autoCorrect={false}
                    autoCaptalize="none"
                    placeholder="Adicionar usuário"
                />
                <Submit>
                    <Icon name="add" size={20} color="#FFF" />
                </Submit>
            </Form>
        </Container>
    );
}
