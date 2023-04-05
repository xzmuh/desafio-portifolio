const dados = document.querySelector('.desenvolvimentos')

function getApiGitHub() {
    fetch('https://api.github.com/users/xzmuh/repos')
    .then(async res => {

        if (!res.ok) {
            throw new Error(res.status)
        }

        let data = await res.json()
        
        data.map(item => {
            let cards = document.createElement('div')
            cards.classList.add("card1")

            cards.innerHTML = `
            
                <div class="card-title">
                    <label><a href="${item.svn_url}" target="_blank"><i class="fa-regular fa-folder"></i>${item.name}</a></label>
                </div>
                <div class="card-content">
                    <p>${item.description}</p><br>
                    <p><a href="${item.homepage}" target="_blank" style="font-size:12px; font-weight:bold">Ver projeto</a></p>
                </div>
                <div class="card-footer">
                    <label><i class="fa-regular fa-calendar"></i>${Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}</label>
                    <div class="canto">
                        <label><i class="fa-solid fa-code"></i>${item.language}</label>
                    </div>
                </div>
               
          `
          console.log(dados)
          dados.appendChild(cards)

        })

    }).catch(e => console.log(e))
}

getApiGitHub();
