import { createServer, Model } from "miragejs";

createServer({
  models: {
    movie: Model,
  },

  routes() {
    this.namespace = "api";

    this.get("/movies", (schema, request) => {
      return schema.movies.all();
    });

    this.get("/movies/:id", (schema, request) => {
      let id = request.params.id;

      return schema.movies.find(id);
    });

    this.post("/movies", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);

      return schema.movies.create(attrs);
    });

    this.put("/movies/:id", (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody);
      let id = request.params.id;
      let movie = schema.movies.find(id);

      return movie.update(newAttrs);
    });

    this.patch("/movies/:id", (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody);
      let id = request.params.id;
      let movie = schema.movies.find(id);

      return movie.update(newAttrs);
    });

    this.delete("/movies/:id", (schema, request) => {
      let id = request.params.id;

      return schema.movies.find(id).destroy();
    });
  },

  seeds(server) {
    server.create("movie", {
      name: "Inception",
      year: 2010,
      description: `<i><b>Inception</b></i> is a 2010 <a href="/wiki/Science_fiction_action_film" class="mw-redirect" title="Science fiction action film">science fiction action film</a><sup id="cite_ref-5" class="reference"><a href="#cite_note-5">[4]</a></sup><sup id="cite_ref-6" class="reference"><a href="#cite_note-6">[5]</a></sup><sup id="cite_ref-7" class="reference"><a href="#cite_note-7">[6]</a></sup> written and directed by <a href="/wiki/Christopher_Nolan" title="Christopher Nolan">Christopher Nolan</a>, who also produced the film with <a href="/wiki/Emma_Thomas" title="Emma Thomas">Emma Thomas</a>, his wife. The film stars <a href="/wiki/Leonardo_DiCaprio" title="Leonardo DiCaprio">Leonardo DiCaprio</a> as a professional thief who steals information by infiltrating the <a href="/wiki/Subconscious" title="Subconscious">subconscious</a> of his targets. He is offered a chance to have his criminal history erased as payment for the implantation of another person's idea into a target's subconscious.<sup id="cite_ref-synop_8-0" class="reference"><a href="#cite_note-synop-8">[7]</a></sup> The <a href="/wiki/Ensemble_cast" title="Ensemble cast">ensemble cast</a> includes <a href="/wiki/Ken_Watanabe" title="Ken Watanabe">Ken Watanabe</a>, <a href="/wiki/Joseph_Gordon-Levitt" title="Joseph Gordon-Levitt">Joseph Gordon-Levitt</a>, <a href="/wiki/Marion_Cotillard" title="Marion Cotillard">Marion Cotillard</a>, <a href="/wiki/Elliot_Page" title="Elliot Page">Elliot Page</a>,<sup id="cite_ref-Elliot_1-1" class="reference"><a href="#cite_note-Elliot-1">[a]</a></sup> <a href="/wiki/Tom_Hardy" title="Tom Hardy">Tom Hardy</a>, <a href="/wiki/Dileep_Rao" title="Dileep Rao">Dileep Rao</a>, <a href="/wiki/Cillian_Murphy" title="Cillian Murphy">Cillian Murphy</a>, <a href="/wiki/Tom_Berenger" title="Tom Berenger">Tom Berenger</a>, and <a href="/wiki/Michael_Caine" title="Michael Caine">Michael Caine</a>.`,
    });
    server.create("movie", {
      name: "Interstellar",
      year: 2014,
      description: `<i><b>Interstellar</b></i> is a 2014 <a href="/wiki/Epic_film" title="Epic film">epic</a> <a href="/wiki/Science_fiction_film" title="Science fiction film">science fiction film</a> co-written, directed and produced by <a href="/wiki/Christopher_Nolan" title="Christopher Nolan">Christopher Nolan</a>. It stars <a href="/wiki/Matthew_McConaughey" title="Matthew McConaughey">Matthew McConaughey</a>, <a href="/wiki/Anne_Hathaway" title="Anne Hathaway">Anne Hathaway</a>, <a href="/wiki/Jessica_Chastain" title="Jessica Chastain">Jessica Chastain</a>, <a href="/wiki/Bill_Irwin" title="Bill Irwin">Bill Irwin</a>, <a href="/wiki/Ellen_Burstyn" title="Ellen Burstyn">Ellen Burstyn</a>, and <a href="/wiki/Michael_Caine" title="Michael Caine">Michael Caine</a>. Set in a <a href="/wiki/Dystopia" title="Dystopia">dystopian</a> future where humanity is struggling to survive, the film follows a group of <a href="/wiki/Astronaut" title="Astronaut">astronauts</a> who travel through a <a href="/wiki/Wormhole" title="Wormhole">wormhole</a> near <a href="/wiki/Saturn" title="Saturn">Saturn</a> in search of a new home for mankind.`,
    });
    server.create("movie", {
      name: "Dunkirk",
      year: 2017,
      description: `<i><b>Dunkirk</b></i> is a 2017 <a href="/wiki/War_film" title="War film">war film</a> written, directed, and produced by <a href="/wiki/Christopher_Nolan" title="Christopher Nolan">Christopher Nolan</a> that depicts the <a href="/wiki/Dunkirk_evacuation" title="Dunkirk evacuation">Dunkirk evacuation</a> of <a href="/wiki/World_War_II" title="World War II">World War II</a> through the perspectives of the land, sea, and air. Its <a href="/wiki/Ensemble_cast" title="Ensemble cast">ensemble cast</a> includes <a href="/wiki/Fionn_Whitehead" title="Fionn Whitehead">Fionn Whitehead</a>, <a href="/wiki/Tom_Glynn-Carney" title="Tom Glynn-Carney">Tom Glynn-Carney</a>, <a href="/wiki/Jack_Lowden" title="Jack Lowden">Jack Lowden</a>, <a href="/wiki/Harry_Styles" title="Harry Styles">Harry Styles</a>, <a href="/wiki/Aneurin_Barnard" title="Aneurin Barnard">Aneurin Barnard</a>, <a href="/wiki/James_D%27Arcy" title="James D'Arcy">James D'Arcy</a>, <a href="/wiki/Barry_Keoghan" title="Barry Keoghan">Barry Keoghan</a>, <a href="/wiki/Kenneth_Branagh" title="Kenneth Branagh">Kenneth Branagh</a>, <a href="/wiki/Cillian_Murphy" title="Cillian Murphy">Cillian Murphy</a>, <a href="/wiki/Mark_Rylance" title="Mark Rylance">Mark Rylance</a>, and <a href="/wiki/Tom_Hardy" title="Tom Hardy">Tom Hardy</a>.`,
    });
  },
});
