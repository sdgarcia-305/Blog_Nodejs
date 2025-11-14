import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import categoryRoutes from './routes/category.routes.js';
import commentRoutes from './routes/comment.routes.js';
import subcategoryRoutes from './routes/subcategory.routes.js';
import favoriteRoutes from './routes/favorite.routes.js';
import blogRoutes from './routes/blog.routes.js';

const app = express();

app.use(cors({origin: '*'}));
app.use(express.json());
app.use('/api/usuarios', userRoutes);
app.use('/api/categorias', categoryRoutes);
app.use('/api/comentarios', commentRoutes);
app.use('/api/subcategorias', subcategoryRoutes);
app.use('/api/favorites', favoriteRoutes);
app.use('/api/blogs', blogRoutes);

export default app;
