import 'cypress-file-upload'; 

describe('File upload',(()=>{

    it('Single file Upload',()=>{
        cy.visit("http://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile('Test1.pdf');
        cy.get('#file-submit').click();
        cy.wait (5000);

          cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');

    })


    it('File Upload - Rename',()=>{
        cy.visit("http://the-internet.herokuapp.com/upload")
        cy.get('#file-upload')
          .attachFile({filePath:'Test1.pdf', fileName:'Sama.pdf'});
        cy.get('#file-submit')
          .click();
        cy.wait (5000);

          cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
          cy.get('#uploaded-files').should('have.text', 'Sama.pdf')

    })


    it('File Upload - Drag and Drop', ()=>{
        cy.visit("http://the-internet.herokuapp.com/upload")

        cy.get('#drag-drop-upload')
          .attachFile('Test1.pdf', {subjectType:'drag-n-drop'});
          cy.wait(5000);

        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
          .contains('Test1.pdf');

    })


    it('Multiple File upload', ()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")

        cy.get("div[class='demo-wrapper'] h1").contains('File Upload');

        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:');
        cy.get("ul[id='fileList'] li").should('contain.text','No Files Selected');

        cy.get('#filesToUpload')
          .attachFile(['Test1.pdf','Test2.pdf','Test3.docx','Test4.docx'] );
          cy.wait(5000);

        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:');

        cy.get('#fileList > :nth-child(4)').contains('Test4.docx');
        
        cy.get('#fileList > :nth-child(3)').contains('Test3.docx');
        
        cy.get('#fileList > :nth-child(1)').contains('Test1.pdf');
        
        cy.get('#fileList > :nth-child(2)').contains('Test2.pdf');

    })


    it('File Upload - Shadow Dom',()=>{

      cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");

        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('Test2.pdf');
        cy.wait(4000);

        cy.get('.smart-item-name',{includeShadowDom:true}).contains('Test2.pdf')

    })


}))