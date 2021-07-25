export const rules = {
    email: {
        reg: /@/,
        msg: "В email должен быть @ и не должно быть пробелов!"
    },
    phone: {
        reg: /^\(0\d{2}\) \d{3}-\d{2}-\d{2}$/,
        msg: "Формарт телефона такой:"
    }
}