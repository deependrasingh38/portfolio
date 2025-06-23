<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js"></script>
            const itemPrices = {
                "pizza" : 120,
                "burger" : 80,
                "noodles" : 100,
                "pasta" : 160
            };
            let total = 0;
            document.getElementById('date').innerText = new Date().toLocaleDateString();
            
            window.onload = function() {
                const itemSelect = document.getElementById("item-name");
                for (let item in itemPrices) {
                    const option = document.createElement("option");
                    option.value = item;
                    option.text = item; 
                    itemSelect.appendChild(option)
                }
            };
            function updatePrice() {
                let item = document.getElementById('item-name').value;
                let qty = parseInt(document.getElementById('item-qty').value)
                if (item && qty > 0) {
                    const price = itemPrices[item] * qty;   
                    document.getElementById('item-price').value = price;
                } else {
                    document.getElementById('item-price').value = "";
                }
            }

            function addItem()
            {
                let name = document.getElementById('item-name').value;
                let qty = parseInt(document.getElementById('item-qty').value);
                let price = parseInt(document.getElementById('item-price').value);

                if(!name || qty<=0 || price<=0)
                {
                    alert('Please Enter Valid Item Details');
                    return;
                }
                const itemTotal= qty*price;
                total = total+itemTotal;

                const mytr = document.createElement("tr");
                mytr.innerHTML = `
                    <td>${name}</td>
                    <td>${qty}</td>
                    <td>${price}</td>
                    <td>${itemTotal}</td>
                `;

                document.getElementById('bill-items').appendChild(mytr);
                document.getElementById('total-amount').innerText = total;

                document.getElementById('item-name').value = "";
                document.getElementById('item-qty').value = "";
                document.getElementById('item-price').value = "";
            }

            function printBill()
            {
                const content = document.getElementById('bill').innerHTML;
                const win = window.open('','','width=700,height=800');
                win.document.write(content)            
                
               
                win.print();
            }
            function downloadPDF()
            {
                const bill = document.getElementById('bill');
                html2pdf().from(bill).save('mybill.pdf');
            }
        