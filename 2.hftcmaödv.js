//start code

let sifre1=Number(prompt("Lütefen seçmiş olduğunuz şifrenizi giriniz.")) ;
let sifre2=Number(prompt("Lütfen seçmiş olduğunuz şifrenizi tekrar giriniz.")) ;

function sifreEslestirme(sifre1,sifre2){
if(sifre1===sifre2){
document.write("Şifre doğru girişiniz gerçekleştiriliyor..."+ "<br/>") ;
}else{
    document.write("Girmiş olduğunuz şifreler eşleştirilemedi lütfen tekrar deneyiniz."+ "<br/>")
}
}
sifreEslestirme(sifre1,sifre2)