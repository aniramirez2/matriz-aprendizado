import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprendizado';
  vis =0;
  aud =0;
  cin =0;
  perguntas = [
    {pergunta: 'Prefiro fazer provas', opcoes:[{'nome':'escritas','value':'vis'}, {'nome':'orais','value':'aud'}, {'nome':'praticas', 'value':'cin'}]},
    {pergunta: 'Meu presente preferido é', opcoes:[{'nome':'um livro ', 'value':'vis'}, {'nome':'um ingresso para um show', 'value':'aud'}, {'nome':'dinheiro para comprar o que quiser', 'value':'cin'}]},
    {pergunta: 'lembro de pessoas com mais facilidade pelo', opcoes:[{'nome':'rosto', 'value':'vis'}, {'nome':'nome','value':'aud'}, {'nome':'momento ou local em que conheci', 'value':'cin'}]},
    {pergunta: 'Aprendo mais facilmente', opcoes:[{'nome':'lendo', 'value':'vis'}, {'nome':'ouvindo', 'value':'aud'}, {'nome':'fazendo', 'value':'cin'}]},
    {pergunta: 'As atividades que mais me motivam', opcoes:[{'nome':'fotografia', 'value':'vis'}, {'nome':'musica', 'value':'aud'}, {'nome':'dança', 'value':'cin'}]},
  ]

  addVote(resposta){
    switch (resposta) {
      case 'vis':
        this.vis++
        break;
      case 'aud':
        this.aud++
        break;
      case 'cin':
        this.cin++ 
        break;   
      default:
        break;
    }
    console.log("add vote added", resposta)
    console.log('vis', this.vis)
    console.log('aud', this.aud)
    console.log('cin', this.cin)
  }

  seeResults(){
    var maxim= Math.max(this.vis, this.aud, this.cin);
    switch (maxim) {
      case this.vis:
        alert('Você tem um aprendizaod visual')
        break;
      case this.aud:
          alert('Você tem um aprendizaod auditivo')
          break;
      case this.aud:
        alert('Você tem um aprendizaod cinestesico')
        break;
      default:
        break;
    } 
  }
  
}
