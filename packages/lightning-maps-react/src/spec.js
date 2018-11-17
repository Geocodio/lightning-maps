/* global test, jest, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import Map from './Map'
import { Swatch } from '../common'

test('Map renders correctly', () => {
  const tree = renderer.create(
    <Map { ...red } />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Map `triangle="hide"`', () => {
  const tree = renderer.create(
    <Map { ...red } triangle="hide" />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Map `triangle="top-right"`', () => {
  const tree = renderer.create(
    <Map { ...red } triangle="top-right" />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Map onChange events correctly', () => {
  const changeSpy = jest.fn((data) => {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy()
  })
  const tree = mount(
    <Map { ...red } onChange={ changeSpy } />,
  )
  expect(changeSpy).toHaveBeenCalledTimes(0)
  const swatches = tree.find(Swatch)
  swatches.at(0).childAt(0).simulate('click')

  expect(changeSpy).toHaveBeenCalled()
})

test('Map with onSwatchHover events correctly', () => {
  const hoverSpy = jest.fn((data) => {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy()
  })
  const tree = mount(
    <Map { ...red } onSwatchHover={ hoverSpy } />,
  )
  expect(hoverSpy).toHaveBeenCalledTimes(0)
  const swatches = tree.find(Swatch)
  swatches.at(0).childAt(0).simulate('mouseOver')

  expect(hoverSpy).toHaveBeenCalled()
})
