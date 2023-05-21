export const formatCurrency = (amount: number) => amount?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') || 0
