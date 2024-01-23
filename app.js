const express = require('express')
const app = express()
app.use(express.json())

const loanTypes = {
    personal: {
        "type": "PERSONAL",
        "interest_rate": 4
    },
    guaranteed: {
        "type": "GUARANTEED",
        "interest_rate": 3
    },
    consignment: {
        "type": "CONSIGNMENT",
        "interest_rate": 2
    }
}

app.get('/', (req, res) => {
    res.json('API em execução!')
})

app.post('/loans', (req, res) => {
    let loans = []
    const customer = req.body
    if (customer.income <= 3000) {
        loans.push(loanTypes.personal)
    }
    if (customer.income > 3000 && customer.income < 5000 && customer.age < 30 && customer.location == 'SP') {
        loans.push(loanTypes.personal)
    }
    if (customer.income >= 5000) {
        loans.push(loanTypes.consignment)
    }
    if (customer.income <= 3000) {
        loans.push(loanTypes.guaranteed)
    }
    if (customer.income > 3000 && customer.income < 5000 && customer.age < 30 && customer.location == 'SP') {
        loans.push(loanTypes.guaranteed)
    }
    const data = {
        'customer': customer.name,
        'loans': loans
    }
    res.json(data)
})

app.listen(3000, () => console.log('API em execução!'))
