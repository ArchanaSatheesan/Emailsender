const nodemailer=require('nodemailer');
const msg={
    from:"archanasatheesantest@gmail.com",
    to:"archana23892@gmail.com",
    subject:"Test email assignment",
    text:"Hai....my message for you.testing first email via nodemailer package"
};
nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"archanasatheesantest@gmail.com",
        pass:"cbvsytueswbqvkph"
    },
    port:465,
    host:'smtp.gmail.com'

})
.sendMail(msg,(err)=>{
    if(err){
        return console.log("Error occured",err);
    }
    else{
        return console.log("Email sent successfully");
    }
        
	})
	
