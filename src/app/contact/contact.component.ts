import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import this

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule], // ✅ Add FormsModule here
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'], // ✅ Corrected from "styleUrl" to "styleUrls"
})
export class ContactComponent {
  scrollToFooter(): void {
    const collectionElement = document.getElementById('footer');
    if (collectionElement) {
      collectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onSubmit() {
    alert('Thank you for your message!');
  }
}
