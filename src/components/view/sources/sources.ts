import './sources.css';
import type { NewsSource } from './sources.types';

class Sources {
    public draw(data: NewsSource[]): void {
        const container = document.querySelector<HTMLSelectElement>('.sources');
        if (!container) {
            throw new Error('Container .sources not found');
        }

        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
        if (!sourceItemTemp) {
            throw new Error('Template #sourceItemTemp not found');
        }

        // сохраняем первую "заглушку" (disabled selected), остальные опции удаляем
        while (container.options.length > 1) {
            container.remove(1);
        }

        const fragment = document.createDocumentFragment();

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
            const option = sourceClone.querySelector<HTMLOptionElement>('.source__item');

            if (!option) return;

            option.textContent = item.name;
            option.value = item.id ?? '';

            fragment.append(option);
        });

        container.appendChild(fragment);
    }
}

export default Sources;