# Store_App

## Objetivo

> Implementar um sistema de vendas! Neste momemnto, o sistema terá apenas as classes e métodos, sem banco de dados. O objetivo é implementar usando os 5 padrões(Criador, Baixo Acoplamento, Alta Coesão, Controlador e Expert) GRASP vistos na última aula.
> O sistema deverá contemplar as seguintes funcionalidades:
>
> - FORNECEDOR fornece PRODUTOS
> - Os PRODUTOS, ao serem comprados do fornecedor vão para o ESTOQUE da LOJA.
> - Um CLIENTE pode comprar PRODUTOS do ESTOQUE da LOJA.
> - Uma COMPRA irá gerar um CUPOM, com valor total da compra e uma lista de PRODUTOS
> - O CLIENTE poderá realizar o pagamento da compra

### Supplier

    - id: string(UUID)
    - name: string
    - balance: number

### Customer

    - id: string(UUID)
    - name: string
    - balance: number

### Store

    - id: string(UUID)
    - name: string
    - balance: number
    - inventory: Inventory

### Inventory

    - id: string(UUID)
    - products: Products[]
    - amount

### Product

    - id: string(UUID)
    - name: string
    - price: number

### Ticket

    - id: string(UUID)
    - date: Date
    - products: Products[]
    - amount: number
    - customerId
    - supplierId
    - orderId
