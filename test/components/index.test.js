const simulate = require('miniprogram-simulate')
const {
  join
} = require('path');

test('components/index', () => {
  const componentPath = join(
    __dirname,
    '../../components/TestCmp/index',
  );
  
  const comp = simulate.render(simulate.load(componentPath))
  const parent = document.createElement('parent-wrapper') 
  comp.attach(parent)

  const view = comp.querySelector('.index') 
  expect(view.dom.innerHTML).toBe('index.properties') 
  expect(window.getComputedStyle(view.dom).color).toBe('green')
})
