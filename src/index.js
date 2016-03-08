import classnames from 'classnames';

const QA_BASE_CLASS = '__qa';
const QA_CLASS_PREFIX = '__qa_';

export default () => ReactClass => {
	const ModifiedReactClass = ReactClass;
	const render = ModifiedReactClass.prototype.render;

	ModifiedReactClass.prototype.render = function () {
		const renderedComponent = render.apply(this, arguments);
		const name = ReactClass.displayName || ReactClass.name;

		if (renderedComponent && name) {
			const { props } = renderedComponent;
			const className = classnames(props.className, QA_BASE_CLASS, QA_CLASS_PREFIX + name.toLowerCase());
			return Object.assign({}, renderedComponent, {
				props: Object.assign({}, props, { className })
			});
		}

		return renderedComponent;
	};

	return ModifiedReactClass;
};
