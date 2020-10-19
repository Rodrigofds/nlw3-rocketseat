const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    
    // Inserir dados na tabela
    /*await saveOrphanage(db, {
        lat: "-8.0432394",
        lng: "-34.9258091",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 01 a 15 anos que se enconte em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "81988009955",
        images: [ 
            "https://images.unsplash.com/photo-1598749953342-b4ee75629dca?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1592840331052-16e15c2c6f95?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade para compartilhar muito amor e carrinho.",
        opening_hours: "Horário de visitas Das 8h até 18h",
        open_on_weekends: "0"
    })*/

    // Consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somete 1 orphanato, pelo id
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    //console.log(orphanage)

    // deletar dado da tablela
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"))
  

})