import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  selectedFiles: File[] = [];

  scrollToFooter(): void {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = [...this.selectedFiles, ...Array.from(input.files)];
    }
  }

  removeFile(index: number): void {
    this.selectedFiles.splice(index, 1);
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) return;

    const formData = new FormData();
    formData.append('name', form.value.name);
    formData.append('email', form.value.email);
    formData.append('message', form.value.message);

    this.selectedFiles.forEach(file => {
      formData.append('attachments', file);
    });

    console.log('Submitting form:', {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message,
      files: this.selectedFiles.map(f => f.name)
    });

    alert('Thank you for your message!');

    form.resetForm();
    this.selectedFiles = [];
  }
}
