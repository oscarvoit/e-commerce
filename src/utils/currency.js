const formatCurrency = value => {
  return value.toLocaleString('pr-br', { style: 'currency', currency: 'BRL'})
}

export {
  formatCurrency,
}