import React from "react";
import {render, fireEvent, waitFor, screen, getByPlaceholderText} from '@testing-library/react'
import '@testing-library/jest-dom';
import {RootComponent} from "./RootComponent";

describe('test root component', () => {
  test('check label', () => {
    const fun = () => {};
    const Root = render(<RootComponent handleSubmit={fun}/>);
    expect(screen.getByText("Введите что-нибудь:")).toBeInTheDocument();
  })

  test('check sync between input and div content', () => {
    const fun = () => {};
    const {container} = render(<RootComponent handleSubmit={fun}/>);
    const inputNode = screen.getByPlaceholderText('Ввод ...')
    fireEvent.change(inputNode, {target: {value: 'Новое значение'}})

    const div = container.querySelector('.curr-value');
    expect(div).toHaveTextContent('Вы ввели: Новое значение')
  })

  test('check form submit on Button click', () => {
    const fun = jest.fn();
    const {container} = render(<RootComponent handleSubmit={fun}/>);
    const btn = container.querySelector('#submit');
    fireEvent(btn, new MouseEvent('click'));
    expect(fun).toHaveBeenCalledTimes(1)
  })
})
