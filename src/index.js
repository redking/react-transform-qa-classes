import classnames from 'classnames';

const QA_BASE_CLASS = '__qa';
const QA_CLASS_PREFIX = QA_BASE_CLASS + '_';

export default () => ReactClass => {
	const ModifiedReactClass = ReactClass;
	const render = ModifiedReactClass.prototype.render;

	ModifiedReactClass.prototype.render = function () {
		const renderedComponent = render.apply(this, arguments);
		const name = QA_CLASS_PREFIX + (ReactClass.displayName || ReactClass.name).toLowerCase();

		if (renderedComponent && name) {
			const { props } = renderedComponent;

			// add id or type as qa class if present on props (use case specific)
			const id = (props.id) ? QA_CLASS_PREFIX + props.id : null;
			const type = (props.type) ? QA_CLASS_PREFIX + props.type : null;
			const className = classnames(props.className, QA_BASE_CLASS, name, id, type);
			return Object.assign({}, renderedComponent, {
				props: Object.assign({}, props, { className })
			});
		}

		return renderedComponent;
	};

	return ModifiedReactClass;
};
