function transcribir(dna) {
    const transcripciones = { G: 'C', C: 'G', T: 'A', A: 'U' };
    return dna.split('').map(base => transcripciones[base] || base).join('');
}
console.log(transcribir("ACGT"))