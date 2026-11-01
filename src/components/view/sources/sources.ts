import './sources.css';
import type { NewsSource } from './sources.types';

class Sources {
    public draw(data: NewsSource[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        if (!sourceItemTemp) {
            throw new Error('Template #sourceItemTemp not found');
        }

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const nameEl = sourceClone.querySelector<HTMLElement>('.source__item-name');
            if (nameEl) {
                nameEl.textContent = item.name;
            }

            const itemEl = sourceClone.querySelector<HTMLElement>('.source__item');
            if (itemEl) {
                itemEl.setAttribute('data-source-id', item.id ?? '');
            }

            fragment.append(sourceClone);
        });

        const container = document.querySelector<HTMLElement>('.sources');
        if (container) {
            container.appendChild(fragment);
        }
    }
}

export default Sources;
