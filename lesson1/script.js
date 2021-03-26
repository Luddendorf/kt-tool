document.addEventListener('DOMContentLoaded', () => {
  const form = document.forms.form;
  const formElements = document.querySelectorAll('textarea, input[type=text]');

  const checkLocalData = (str, name, add, remove) => {
    if (name) {
      if (name.includes(remove)) {
        sessionStorage.setItem(str, `${name.replace(remove, add)}`);
      } else {
        sessionStorage.setItem(str, `${add} ${name}`);
      }
    }
  };

  formElements.forEach((elem) => {
    if (elem.value === '') {
      elem.value = sessionStorage.getItem(elem.name, elem.value);
    }
    elem.addEventListener('input', () => {
      sessionStorage.setItem(elem.name, elem.value);
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const user = sessionStorage.getItem('userName');
    const message = sessionStorage.getItem('userMessage');

    if (document.location.href.includes('index2')) {
      checkLocalData('userName', user, 'отД', 'отР');
      checkLocalData('userMessage', message, 'отД', 'отР');
      document.location.href = 'index.html';
    } else {
      checkLocalData('userName', user, 'отР', 'отД');
      checkLocalData('userMessage', message, 'отР', 'отД');
      document.location.href = 'index2.html';
    }
  });

  form.addEventListener('reset', () => {
    window.sessionStorage.clear();
  });
});
