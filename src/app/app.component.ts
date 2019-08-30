import { Component } from '@angular/core';
import {visual, auditivo, cinestesico} from '../assets/texts'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprendizado';
  aprendizado="";
  vis =0;
  aud =0;
  cin =0;
  perguntas = [
    {pergunta: 'Prefiro fazer provas', opcoes:[{'nome':'escritas','value':'vis'}, {'nome':'orais','value':'aud'}, {'nome':'praticas', 'value':'cin'}]},
    {pergunta: 'Meu presente preferido é', opcoes:[{'nome':'um livro ', 'value':'vis'}, {'nome':'um ingresso para um show', 'value':'aud'}, {'nome':'dinheiro para comprar o que quiser', 'value':'cin'}]},
    {pergunta: 'lembro de pessoas com mais facilidade pelo', opcoes:[{'nome':'rosto', 'value':'vis'}, {'nome':'nome','value':'aud'}, {'nome':'momento ou local em que conheci', 'value':'cin'}]},
    {pergunta: 'Aprendo mais facilmente', opcoes:[{'nome':'lendo', 'value':'vis'}, {'nome':'ouvindo', 'value':'aud'}, {'nome':'fazendo', 'value':'cin'}]},
    {pergunta: 'As atividades que mais me motivam', opcoes:[{'nome':'fotografia', 'value':'vis'}, {'nome':'musica', 'value':'aud'}, {'nome':'dança', 'value':'cin'}]},
    {pergunta: 'Na maioria das vezes, prefiro ', opcoes:[{'nome':'observar', 'value':'vis'}, {'nome':'ouvir', 'value':'aud'}, {'nome':'fazer', 'value':'cin'}]},
    {pergunta: 'Ao lembrar um filme me vem a mente', opcoes:[{'nome':'algumas cenas', 'value':'vis'}, {'nome':'algumas falas', 'value':'aud'}, {'nome':'se gostei ou não do filme', 'value':'cin'}]},
    {pergunta: 'Nas férias, gosto mais de', opcoes:[{'nome':'conhecer novos lugares', 'value':'vis'}, {'nome':'descansar', 'value':'aud'}, {'nome':'participar de atividades', 'value':'cin'}]},
    {pergunta: 'O que mais valorizo nas pessoas é', opcoes:[{'nome':'aparencia', 'value':'vis'}, {'nome':'o que elas dizem', 'value':'aud'}, {'nome':'o que elas fazem', 'value':'cin'}]},
    {pergunta: 'Percebo que alguém gosta de mim', opcoes:[{'nome':'pela expressao do rosto', 'value':'vis'}, {'nome':'pelo jeito que fala comigo', 'value':'aud'}, {'nome':'pelas atitudes que tem comigo', 'value':'cin'}]},
    {pergunta: 'Meu carro preferido tem principalmente que ser', opcoes:[{'nome':'bonito', 'value':'vis'}, {'nome':'silencioso', 'value':'aud'}, {'nome':'confortavél', 'value':'cin'}]},
    {pergunta: 'Quando vou comprar algo, procuro', opcoes:[{'nome':'olhar o produto sem interferencia do vendedor', 'value':'vis'}, {'nome':'prefiro falar com um vendedor', 'value':'aud'}, {'nome':'testar e experimentar o produto', 'value':'cin'}]},
    {pergunta: 'Tomo decisões com base principalmente', opcoes:[{'nome':'no que vejo', 'value':'vis'}, {'nome':'nas opinioes dos outros clientes', 'value':'aud'}, {'nome':'na minha vontade', 'value':'cin'}]},
    {pergunta: 'Em excesso, o que mais me incomoda é', opcoes:[{'nome':'claridade', 'value':'vis'}, {'nome':'barulho', 'value':'aud'}, {'nome':'lugares cheios', 'value':'cin'}]},
    {pergunta: 'O que mais me agrada num restaurante', opcoes:[{'nome':'ambiente', 'value':'vis'}, {'nome':'conversa', 'value':'aud'}, {'nome':'comida', 'value':'cin'}]},
    {pergunta: 'Num show, valorizo mais a', opcoes:[{'nome':'iluminação e cenario', 'value':'vis'}, {'nome':'musicas', 'value':'aud'}, {'nome':'performance do cantor no palco', 'value':'cin'}]},
    {pergunta: 'Enquanto espero alguém fico', opcoes:[{'nome':'observando o ambiente', 'value':'vis'}, {'nome':'ouvindo as conversas', 'value':'aud'}, {'nome':'andando', 'value':'cin'}]},
    {pergunta: 'Eu mais me entusiasmo quando', opcoes:[{'nome':'me mostram', 'value':'vis'}, {'nome':'me contam', 'value':'aud'}, {'nome':'me convidam para participar', 'value':'cin'}]},
    {pergunta: 'Ao consolar alguém, procuro', opcoes:[{'nome':'um caminho para a solução', 'value':'vis'}, {'nome':'uma palavra de conforto', 'value':'aud'}, {'nome':'um abraço', 'value':'cin'}]},
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
  }

  seeResults(){
    var maxim= Math.max(this.vis, this.aud, this.cin);
    console.log("primeiro", maxim)
    if(maxim != 0){
      switch (maxim) {
        case this.vis:
          this.aprendizado = visual
          break;
        case this.aud:
            this.aprendizado = auditivo
            break;
        case this.aud:
          this.aprendizado = cinestesico
          break;
      } 
    }else{
      this.aprendizado = 'por favor preencha os campos'
    }
  }
  
}
