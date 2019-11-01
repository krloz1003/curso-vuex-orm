export const users = [
    {
      id: 1,
      name: 'Israel Parra',
      email: 'israelp@cursosdesarrolloweb.es',
      phone: 123456789,
      posts: [],
      comments: []
    },
    {
      id: 2,
      name: 'Admin',
      email: 'admin@cursosdesarrolloweb.es',
      phone: 123456789,
      posts: [],
      comments: []
    },
    {
      id: 3,
      name: 'Pepe',
      email: 'pepe@mail.com',
      phone: 123456789,
      posts: [],
      comments: []
    }
  ]
  
  export const posts = [
    {
      id: 1,
      user_id: 1,
      title: 'Post 1!',
      content: 'Nuevo post de pruebas',
    },
    {
      id: 2,
      user_id: 2,
      title: 'Post 2!',
      content: 'Otro post de pruebas',
    },
    {
      id: 3,
      user_id: 3,
      title: 'Post 3!',
      content: 'Nuevo post de pruebas',
    },
    {
      id: 4,
      user_id: 1,
      title: 'Post 4!',
      content: 'Nuevo post de pruebas',
    },
    {
      id: 5,
      user_id: 2,
      title: 'Post 5!',
      content: 'Otro post de pruebas',
    },
    {
      id: 6,
      user_id: 3,
      title: 'Post 6!',
      content: 'Nuevo post de pruebas',
    }
  ]
  
  export const comments = [
    {
      id: 1,
      user_id: 1,
      post_id: 1,
      comment: 'Comentario 1',
    },
    {
      id: 2,
      user_id: 2,
      post_id: 1,
      comment: 'Comentario 2',
    },
    {
      id: 3,
      user_id: 3,
      post_id: 2,
      comment: 'Comentario 3',
    }
  ];