let numNeighbours = Number(prompt('How many neighbor countries does your country have?'));
if(numNeighbours === 1){
    console.log('Only 1 border!')
}else if(numNeighbours > 1) {
    console.log('More than 1 border')
} else {
    console.log('No borders')
}
// khi bạn thay thế toán tử == bằng toán tử ===, chương trình sẽ so sánh giá trị và kiểu dữ liệu của biến.Khi numNeighbours được khai báo thông qua prompt, giá trị của nó là một chuỗi (string). Nếu bạn sử dụng toán tử ===, so sánh sẽ không thành công với giá trị 1, vì 1 là một số nguyên. Điều này có nghĩa là khi numNeighbours là chuỗi "1", câu lệnh if (numNeighbours === 1) sẽ trả về false. Điều này xảy ra vì toán tử === yêu cầu cả giá trị và kiểu dữ liệu phải giống nhau.Khi numNeighbours được khai báo thông qua prompt, giá trị của nó là một chuỗi (string). Nếu bạn sử dụng toán tử ===, so sánh sẽ không thành công với giá trị 1, vì 1 là một số nguyên. Điều này có nghĩa là khi numNeighbours là chuỗi "1", câu lệnh if (numNeighbours === 1) sẽ trả về false. Điều này xảy ra vì toán tử === yêu cầu cả giá trị và kiểu dữ liệu phải giống nhau.