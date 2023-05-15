import { Recension } from 'src/models/recension.model';
import { Product } from '../models/product.model';

export class InitData {
  private static _instance: InitData;
  private _products: Product[] = [];

  private constructor() {
    console.log('InitDate init');
    this.initProducts();
  }

  public static get instance(): InitData {
    if (!this._instance) {
      this._instance = new InitData();
    }
    return this._instance;
  }

  private initProducts(): void {
    this._products.push(
      new Product(
        'Der Klassiker',
        20,
        'Tauchen Sie ein in die zeitlose Einfachheit und natürliche Schönheit des klassischen Beißholzes aus Holz. Dieses traditionelle Kauwerkzeug bietet Ihnen ein authentisches und beruhigendes Kauerlebnis, das die Sinne anspricht. Hergestellt aus hochwertigem Holz, ist dieses Beißholz langlebig, glatt und angenehm zu halten. Die einfache, aber effektive Formgebung ermöglicht es Ihnen, Ihren Kiefer zu trainieren, Stress abzubauen und den Drang zu kauen zu befriedigen. Ob für medizinische Zwecke, zum Zahnen von Babys oder als vielseitiges Werkzeug in Ihren persönlichen Ritualen und Gewohnheiten, dieses klassische Holzbeißholz wird Sie mit seiner natürlichen Anziehungskraft und unverwechselbaren Wärme begeistern. Greifen Sie zum Klassiker und genießen Sie das zeitlose Vergnügen des Kauens!',
        'images/wood.jpg',
        'Medical',
        10,
        5,
        [
          new Recension(
            'Super',
            'Ich war auf der Suche nach dem perfekten Beißholz für meine Zahnarztpraxis, und dieses hier hat definitiv den Nagel auf den Kopf getroffen! Meine Patienten lieben es, darauf herumzukauen, während ich ihnen eine Spritze gebe. Wer hätte gedacht, dass ein kleines Stück Holz so viel Freude bereiten kann? Absolut empfehlenswert!',
            5
          ),
          new Recension(
            'Ein Traum!',
            'Als leidenschaftlicher Fetischliebhaber war ich immer auf der Suche nach dem ultimativen Stück Holz, um meine Bedürfnisse zu befriedigen. Und ich muss sagen, diese Beißstange hat mich nicht enttäuscht! Sie hat die perfekte Balance zwischen Komfort und Festigkeit. Sie ist so gut, dass ich sogar vergessen habe, dass sie eigentlich für den medizinischen Bereich gedacht ist. Ein echter Genuss.',
            5
          ),
          new Recension(
            'Lecker!',
            'Ich war skeptisch, als ich mir dieses Beißholz bestellt habe, aber es hat mich positiv überrascht! Es ist nicht nur äußerst praktisch für meinen medizinischen Bedarf, sondern es hat auch meine Katze dazu gebracht, mich mit großen Augen anzustarren, als ob ich verrückt geworden wäre. Doppelter Spaß für mich und mein Haustier!',
            5
          ),
          new Recension(
            'Ein absoluter LEBENSRETTER!',
            'Ich habe diese Beißstange für einen medizinischen Notfall gekauft, und ich muss sagen, ich habe sie mehr benutzt, als ich erwartet hatte. Sie hat nicht nur meinen Zahnarztbesuch angenehmer gemacht, sondern sie hat auch als praktisches Werkzeug gedient, um meine nervigen Nachbarn fernzuhalten. Ein vielseitiges und lustiges Produkt!',
            5
          ),
          new Recension(
            'Ein Muss für alle, die Angst vorm Zahnarzt haben!',
            'Ich habe mir diese Beißstange gekauft, um meine Zahnarztangst zu überwinden, und sie hat Wunder bewirkt! Jedes Mal, wenn ich das Bedürfnis verspüre, vor Angst zu schreien, beiße ich einfach fest zu. Es lenkt mich ab und lässt mich vergessen, dass ich gerade in einem Zahnarztstuhl gefangen bin. Ein Muss für alle, die Angst vorm Zahnarzt haben!',
            5
          ),
          new Recension(
            'Ein tolles Geschenk!',
            'Ich habe diese Beißstange als Geschenk für meine Partnerin gekauft, und wir haben gemeinsam Tränen gelacht! Es hat unsere Beziehung auf eine ganz neue Ebene gebracht. Wer hätte gedacht, dass ein kleines Holzstück so viel Spaß machen kann? Wenn du nach einem aufregenden und unkonventionellen Geschenk suchst, dann ist das hier genau das Richtige!',
            5
          ),
          new Recension(
            'absolut empfehlenswert!',
            'Ich bin begeistert von dieser Beißstange! Nicht nur, dass sie meinen Kiefer trainiert und mir hilft, Stress abzubauen, sondern sie hat auch einen wunderbaren Nebeneffekt - meine Kollegen denken, ich sei ein echter Badass! Jedes Mal, wenn ich sie aus meiner Tasche ziehe, ernte ich bewundernde Blicke und ein paar neidische Kommentare. Ein großartiges Accessoire!',
            5
          ),
        ]
      ),
      new Product(
        'Die Revulotion!',
        20,
        'Entdecken Sie das revolutionäre Beißholz der modernen Zeit! Unsere moderne Version aus hochwertigem Gummi vereint Komfort, Funktionalität und einen Hauch von Spaß. Das weiche und flexible Material bietet ein angenehmes Kauerlebnis und ist dabei sanft zu Ihren Zähnen und dem Kiefer. Egal, ob Sie es für medizinische Zwecke, als Stressabbau oder als Spielzeug in Ihrem Fetischrepertoire verwenden möchten, diese Gummiversion wird Sie begeistern. Mit ihrer ansprechenden Optik und ihrem zeitgemäßen Design ist sie ein wahrer Blickfang. Verabschieden Sie sich von langweiligen Beißhölzern und erleben Sie die neue Ära des Kauvergnügens!',
        'images/wood.jpg',
        'Medical',
        10,
        5,
        []
      ),
      new Product(
        'Der Techi!',
        20,
        'Willkommen in der Zukunft des Kauens! Unsere moderne, technische Version des Beißholzes aus hochwertigem Metall wird Sie in Staunen versetzen. Das glänzende Metall in Kombination mit innovativen Funktionen macht dieses Beißholz zu einem echten High-Tech-Produkt. Genießen Sie die präzise Verarbeitung und die futuristische Optik, während Sie Ihren Kiefer trainieren und Stress abbauen. Mit eingebauten Vibrationsfunktionen, LED-Lichtern oder sogar einem Bluetooth-Lautsprecher eröffnet Ihnen dieses Beißholz völlig neue Dimensionen des Kauerlebnisses. Ob für den medizinischen Bereich, den Fetischgebrauch oder einfach nur als einzigartiges Gadget, dieses Beißholz der nächsten Generation wird Ihre Erwartungen übertreffen.',
        'images/wood.jpg',
        'Medical',
        10,
        5,
        []
      ),
      new Product(
        'Der Besondere!',
        20,
        'Treffen Sie unsere außergewöhnliche Ball-Beißstange mit fixierbarem Gurt! Dieses einzigartige Beißholz in Form eines Gummiballs kombiniert Spielspaß mit Komfort und Funktionalität. Der weiche und flexible Gummiball ist angenehm zu kauen und bietet ein stimulierendes Mundgefühl. Mit dem fixierbaren Gurt können Sie das Beißholz sicher und bequem an Ort und Stelle halten, während Sie Ihren Aktivitäten nachgehen. Egal, ob Sie es für medizinische Zwecke, als Fetischspielzeug oder als originelles Accessoire verwenden möchten, diese ungewöhnliche Version wird Ihre Neugier wecken und Ihren Kiefer verwöhnen. Entdecken Sie eine völlig neue Art des Kauvergnügens mit dieser unkonventionellen Ball-Beißstange mit fixierbarem Gurt aus Gummi.',
        'images/wood.jpg',
        'Medical',
        10,
        5,
        []
      )
    );
  }
}
