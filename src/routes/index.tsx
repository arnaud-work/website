import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="page">
      <header class="hero">
        <p class="eyebrow">Micro-entreprise</p>
        <h1>Arnaud Work</h1>
        {/* TODO: replace with real positioning — this is placeholder copy */}
        <p class="tagline">Développement logiciel en freelance.</p>
      </header>

      <section class="about">
        {/* TODO: replace with a real description of the services offered */}
        <p>
          Ce site est encore un chantier — le contenu ci-dessus est un
          placeholder à remplacer par une vraie présentation de l'activité.
        </p>
      </section>

      <footer class="contact">
        <a href="mailto:contact@arnaud.work">contact@arnaud.work</a>
      </footer>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Arnaud Work",
  meta: [
    {
      name: "description",
      content: "Arnaud Work — développement logiciel en freelance.",
    },
  ],
};
