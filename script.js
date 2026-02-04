var tauxEuroDollar=1

function chargerTaux(){
	fetch("https://api.frankfurter.app/latest?from=EUR&to=USD")
	     .then(reponse=>reponse.json())
		 .then(data=>{
			tauxEuroDollar= data.rates.USD;
			console.log("le taux est :"+ tauxEuroDollar)
		 })
		 .catch(error => {
            console.log("Erreur API, taux par défaut utilisé");
            tauxEuroDollar = 1.32;
        });
		 
}

function ConvertirEuros(){
	var saisiee=document.getElementById('euro')
	var repd=document.getElementById('p1')
	var saisied=document.getElementById('dollar')
	var repe=document.getElementById('p2')
    var somme=parseFloat(saisiee.value)
	repd.innerText="Dollars = " +somme*tauxEuroDollar
	saisiee.style.backgroundColor='red'
	saisied.style.backgroundColor='white'
	repe.style.backgroundColor='white'
	repe.innerText=""
	saisied.value=""
	

}

function ConvertirDollars(){
	var saisiee=document.getElementById('euro')
	var repd=document.getElementById('p1')
	var saisied=document.getElementById('dollar')
	var repe=document.getElementById('p2')
	var somme=parseFloat(saisied.value)
	repe.innerText="Euros = " +somme/tauxEuroDollar
	saisied.style.backgroundColor='red'
	saisiee.style.backgroundColor='white'
	repd.style.backgroundColor='white'
	repd.innerText=""
	saisiee.value=""
	

}





