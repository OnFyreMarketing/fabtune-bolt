import React, { useEffect } from 'react';

    function ChatbotIntegration() {
      useEffect(() => {
        // Function to handle messages from the chatbot
        const handleChatbotMessage = (message) => {
          const titleMatch = message.match(/Songtitel:\s*(.*)/);
          const styleMatch = message.match(/Musikstilbeschreibung:\s*(.*)/);
          const lyricsMatch = message.match(/Songtext:\s*([\s\S]*)/);

          if (titleMatch && styleMatch && lyricsMatch) {
            const title = titleMatch[1];
            const style = styleMatch[1];
            const lyrics = lyricsMatch[1];

            // Automatically submit the hidden form with extracted data
            submitHiddenForm(title, style, lyrics);
          }
        };

        // Mock function to simulate receiving messages from the chatbot
        const simulateChatbotMessages = () => {
          const messages = [
            "Songtitel: My Song\nMusikstilbeschreibung: Pop\nSongtext: This is the song text..."
          ];
          messages.forEach(handleChatbotMessage);
        };

        // Call the simulation function (replace this with actual chatbot integration)
        simulateChatbotMessages();
      }, []);

      const submitHiddenForm = (title, style, lyrics) => {
        fetch('/api/songs/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, style, lyrics })
        })
        .then(response => response.json())
        .then(data => {
          console.log('Song generated:', data);
        })
        .catch(error => {
          console.error('Error generating song:', error);
        });
      };

      return (
        <div>
          <div id="pickaxe-chatbot">
            {/* Embed the Pickaxe Chatbot here */}
            <script>
              window.PICKAXE = window.PICKAXE || { pickaxes: [], style: "kHsjoCQGgI0GWASmgIdIAxiDA6wgM6CMbgC4UgDDAXYEAvDIBoGEBgG4CAWQIGYBgwCqApdoEjggjIaCcCoCA9gVAaAnBYBkqgBkKBwWoDNmgJhtAFwqAFQEAHkIAXAQAASgbCfAhqSAAAsDEAYEc+QJckgGXFAhUGBQ30CssIGW7QC6VgSoRAA0uBF3ECLDIBogQFSwgShNAIqwAwQPhAgLiFAIhKAABUBq7IAiioASyIAJF4A0sIBYQoAiDIAACIAISgD6gHpAAPCAGkiAER+ACSKAaSiAISwAboBBMoA9OIAlQYBSsIBBTYBCFoAQfIAneIC3KwCCgDYqgHTOgEM/gJhVgIA1gBgJgEk8gImEgGONgCORAGqAN3CAoTuAf3uArU+AVlWAi7WAZWGAMWmAnzWAR3mAL6uATCqADa6ADEiAUhSAz+kAiICSK4AOIYALi4AAEYABbIAC6IAjEYABjIAQhIAWBUAo9AAAsAFiyADhVAAKEgFKQQCGoIAADEAIEiARC7AAABgEFCwCIGoAQhYA6IAAgsAkzCAToRAA0JgAgXQAkTYBI0EAhKOAEMfAOpJgFSgwBM8oBMJcAAJeAUGxAKGjgEUhQCMjYBbjcApPyAWRjANDkgAJKwAGjIABkMApoCAWZNACwNgHtQQAwJIBVWsAlNCAWqxAC0mgDdCwAGgoANDUASFCAaBZAF/vgAAUQB6RoBPe8AiHmAAMEACGAPI/AOr3gBX2wABl4AIb0AaAqASGBANhQgAQYQBrFIAOnEAAFSAYaxAAkvgAlkwDIAYAQAMAgAOAaJRABMZgCwDQAOCIAFqsAGSmAAF5AGKKgB9LQDFTYAej8AeMiAf4fAIzFgAahQAJRoAt1cAtsOAYDPABMKgBisQA3FoA6h0ABY2ADUfAEAjgBhAwBWAYACR0AzA2APDRACB6gEhEQDiIYAI48AZiuALHZAOTTgEqFwBgb4AOa0A+k+AanTAOIQgCXQwBiEIBAAUAFjWAOhrgA4ioAKOiACJIAAugAI34ATMKAGpLgCCXIACs6AIQugABgIAniyALgUgBn1YARgOAN/UgCfJYABbWADvCgCEQYADyOAPQ5gBi+IAAIoAABAA=" };
              window.PICKAXE.pickaxes.push({ id: "FablyricDein_AISongtextGhostwriter__Backup_UOFJJ", type: "inline" });
              const { id: _fid } = window.PICKAXE.pickaxes[0];
              fetch(`https://embed.pickaxeproject.com/axe/api/script/${_fid}`)
                .then((e => e.json()))
                .then((({ v: e }) => {
                  const t = `https://cdn.jsdelivr.net/gh/pickaxeproject/cdn@${e}/dist`;
                  if (!document.querySelector(`script[src="${t}/bundle.js"]`)) {
                    const e = document.createElement("script");
                    e.src = t + "/bundle.js", e.defer = !0, document.head.appendChild(e)
                  }
                }));
            </script>
            <div id="pickaxe-inline-FablyricDein_AISongtextGhostwriter__Backup_UOFJJ"></div>
          </div>
        </div>
      );
    }

    export default ChatbotIntegration;
