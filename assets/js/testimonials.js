/* -- copied from https://www.webhostingsecretrevealed.net/blog/featured-articles/15-cool-javascript-sample-snippets/ -- */

writeRandomQuote = function () {
    let quotes = new Array();
    quotes[0] = "Action is the real measure of intelligence.";
    quotes[1] = "Baseball has the great advantage over cricket of being sooner ended.";
    quotes[2] = "Every goal, every action, every thought, every feeling one experiences, whether it be consciously or unconsciously known, is an attempt to increase one's level of peace of mind.";
    quotes[3] = "A good head and a good heart are always a formidable combination.";
    var rand = Math.floor(Math.random()*quotes.length);
    document.write(quotes[rand]);
}
writeRandomQuote();


<script class="testimonial-generator" type="text/javascript">writeRandomQuote();</script>