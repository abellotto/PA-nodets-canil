import { Router } from 'express';
import * as PageController from "../controllers/pageController";
import * as SearcheController from "../controllers/searchcontroller";


const router = Router();

router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

router.get('/search', SearcheController.search);

export default router;